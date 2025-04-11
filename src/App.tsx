import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { Separator } from "./components/ui/separator";

const questions = [
  // 1
  "What’s Athena’s go-to Starbucks or coffee shop order?",
  // 2
  "What’s Athena’s biggest ick or pet peeve?",
  // 3
  "How many kids does Athena want — and what’s her ideal gender combo?",
  // 4
  "What’s Athena’s dream vacation spot — the place she’s always wanted to go but hasn’t yet?",
  // 5
  "What’s Athena’s most sacred self-care ritual — the one where Andrew *knows* to not bother her?",
  // 6
  "What’s Val’s most *spoiled* behavior that Athena encourages — and Andrew just has to live with?",
  // 7
  "What’s one part of Andrew’s personal style that Athena secretly wants to change?",
  // 8
  "What’s Athena’s love language — and what does Andrew *do* that fills her cup the most?",
  // 9
  "What’s one moment in their relationship Athena would probably say was a “turning point” — the moment she knew Andrew was *the one*?",
  // 10
  "What’s one thing that Andrew does that gets Athena in the mood?",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const currentQuestion = questions[currentIndex];
  const videoSrc = `/videos/q${currentIndex + 1}.mp4`;

  const handleReveal = () => setShowVideo(true);
  const handleNext = () => {
    setShowVideo(false);
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  return (
    <main className="w-screen h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-6 space-y-6 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            How Well Does Andrew Know Athena?
          </CardTitle>
          <p className="text-sm text-muted-foreground text-center">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-xl text-center">{currentQuestion}</div>

          {!showVideo ? (
            <div className="flex justify-center">
              <Button onClick={handleReveal} size="lg">
                Reveal Athena’s Answer
              </Button>
            </div>
          ) : (
            <AspectRatio ratio={16 / 9}>
              <video
                key={videoSrc}
                src={videoSrc}
                controls
                autoPlay
                className="rounded-xl w-full h-full object-contain"
              />
            </AspectRatio>
          )}

          <Separator />

          {currentIndex < questions.length - 1 && (
            <div className="flex justify-center">
              <Button onClick={handleNext} variant="secondary">
                Next Question →
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
