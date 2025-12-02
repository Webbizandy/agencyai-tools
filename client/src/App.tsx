import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import ToolDetailV4 from "./pages/ToolDetailV4";
import ToolDetailV4Test from "./pages/ToolDetailV4Test";
import ToolDetailMinimal from "./pages/ToolDetailMinimal";
import ToolDetailBalanced from "./pages/ToolDetailBalanced";
import About from "./pages/About";
import ApolloVsHunter from "./pages/ApolloVsHunter";
import JasperVsCopyAi from "./pages/JasperVsCopyAi";
import MakeVsZapier from "./pages/MakeVsZapier";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Newsletter from "./pages/Newsletter";
import PromptsToProfits from "./pages/PromptsToProfits";
import Recommend from "./pages/Recommend";
import Top10 from "./pages/Top10";
import GoHighLevelVsClickFunnels from "./pages/GoHighLevelVsClickFunnels";
import ChatbaseReview from "./pages/ChatbaseReview";
import Stack from "./pages/Stack";
import MailchimpVsActiveCampaign from "./pages/MailchimpVsActiveCampaign";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/tool/:slug"} component={ToolDetailBalanced} />
      <Route path="/about" component={About} />
      <Route path="/compare/apollo-vs-hunter" component={ApolloVsHunter} />
      <Route path="/compare/jasper-vs-copyai" component={JasperVsCopyAi} />
      <Route path="/compare/make-vs-zapier" component={MakeVsZapier} />
      <Route path="/compare/gohighlevel-vs-clickfunnels" component={GoHighLevelVsClickFunnels} />
      <Route path="/compare/mailchimp-vs-activecampaign" component={MailchimpVsActiveCampaign} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/newsletter/:slug" component={BlogPost} />
      <Route path="/prompts-to-profits" component={PromptsToProfits} />
      <Route path="/top-10" component={Top10} />
      <Route path="/review/chatbase" component={ChatbaseReview} />
      <Route path="/stack" component={Stack} />
      <Route path="/rec/:slug" component={Recommend} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
