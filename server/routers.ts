import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Email subscription endpoint for Systeme.io integration
  email: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        const { email } = input;
        
        try {
          // Call Systeme.io API to add contact
          const response = await fetch('https://api.systeme.io/api/contacts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': process.env.SYSTEME_API_KEY || '',
            },
            body: JSON.stringify({
              email,
              locale: 'en',
            }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error('[Systeme.io] API error:', response.status, errorText);
            throw new Error('Failed to subscribe');
          }

          return {
            success: true,
            message: 'Successfully subscribed!',
          };
        } catch (error) {
          console.error('[Systeme.io] Subscription error:', error);
          throw new Error('Failed to subscribe. Please try again.');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
