import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea } from "/components/ui";
import { Clock } from "lucide-react";

// Mock data for demonstration purposes
const knowledgeBase = [
  { id: 1, issue: "Order not received", resolution: "Contact shipping provider" },
  { id: 2, issue: "Product damaged", resolution: "Return product for replacement" },
];

const CustomerSupportApp = () => {
  const [conversation, setConversation] = useState("");
  const [summarizedConversation, setSummarizedConversation] = useState("");
  const [routingSuggestion, setRoutingSuggestion] = useState("");
  const [resolutionRecommendations, setResolutionRecommendations] = useState([]);

  const handleSummarizeConversation = () => {
    // Simulate conversation summarization
    const summarizedText = conversation.substring(0, 50) + "...";
    setSummarizedConversation(summarizedText);
  };

  const handleAnalyzeConversation = () => {
    // Simulate conversation analysis
    const routingSuggestion = "Customer Support Team";
    setRoutingSuggestion(routingSuggestion);

    // Simulate resolution recommendations
    const resolutionRecommendations = knowledgeBase.filter((issue) =>
      conversation.toLowerCase().includes(issue.issue.toLowerCase())
    );
    setResolutionRecommendations(resolutionRecommendations);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Customer Support App</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Conversation Input:</Label>
        <Textarea value={conversation} onChange={(e) => setConversation(e.target.value)} />
        <Button onClick={handleSummarizeConversation}>Summarize Conversation</Button>
        <Label>Summarized Conversation:</Label>
        <p>{summarizedConversation}</p>
        <Button onClick={handleAnalyzeConversation}>Analyze Conversation</Button>
        <Label>Routing Suggestion:</Label>
        <p>{routingSuggestion}</p>
        <Label>Resolution Recommendations:</Label>
        <ul>
          {resolutionRecommendations.map((recommendation) => (
            <li key={recommendation.id}>{recommendation.resolution}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CustomerSupportApp;