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
import ToolDetailBalanced from "./pages/ToolDetailBalanced";
import ToolDetailV5 from "./pages/ToolDetailV5";
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
import InstantlyVsSmartlead from "./pages/InstantlyVsSmartlead";
import LemlistVsInstantly from "./pages/LemlistVsInstantly";
import GoHighLevelVsHubSpot from "./pages/GoHighLevelVsHubSpot";
import JasperVsChatGPT from "./pages/JasperVsChatGPT";
import ActiveCampaignVsConvertKit from "./pages/ActiveCampaignVsConvertKit";
import CalendlyVsAcuity from "./pages/CalendlyVsAcuity";
import ReplyIoVsInstantly from "./pages/ReplyIoVsInstantly";
import SynthesiaVsDescript from "./pages/SynthesiaVsDescript";
import MidjourneyVsDallE from "./pages/MidjourneyVsDallE";
import MakeVsN8n from "./pages/MakeVsN8n";
import Comparisons from "./pages/Comparisons";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/tool/:slug"} component={ToolDetailV5} />
      <Route path="/about" component={About} />
      <Route path="/compare/apollo-vs-hunter" component={ApolloVsHunter} />
      <Route path="/compare/jasper-vs-copyai" component={JasperVsCopyAi} />
      <Route path="/compare/make-vs-zapier" component={MakeVsZapier} />
      <Route path="/compare/gohighlevel-vs-clickfunnels" component={GoHighLevelVsClickFunnels} />
      <Route path="/compare/mailchimp-vs-activecampaign" component={MailchimpVsActiveCampaign} />
      <Route path="/compare/instantly-vs-smartlead" component={InstantlyVsSmartlead} />
      <Route path="/compare/lemlist-vs-instantly" component={LemlistVsInstantly} />
      <Route path="/compare/gohighlevel-vs-hubspot" component={GoHighLevelVsHubSpot} />
      <Route path="/compare/jasper-vs-chatgpt" component={JasperVsChatGPT} />
      <Route path="/compare/activecampaign-vs-convertkit" component={ActiveCampaignVsConvertKit} />
      <Route path="/compare/calendly-vs-acuity" component={CalendlyVsAcuity} />
      <Route path="/compare/replyio-vs-instantly" component={ReplyIoVsInstantly} />
      <Route path="/compare/synthesia-vs-descript" component={SynthesiaVsDescript} />
      <Route path="/compare/midjourney-vs-dalle" component={MidjourneyVsDallE} />
      <Route path="/compare/make-vs-n8n" component={MakeVsN8n} />
      <Route path="/comparisons" component={Comparisons} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/terms-of-service" component={Terms} />
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
