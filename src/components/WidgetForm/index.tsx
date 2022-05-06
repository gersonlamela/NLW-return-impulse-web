import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContextStep } from "./Steps/FeedBackContextStep";

import bugImageUrl from "../../assets/icon/bug.svg";
import ideaImageUrl from "../../assets/icon/idea.svg";
import thoughtImageUrl from "../../assets/icon/thought.svg";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpeda",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setfeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setfeedbackSent(false);
    setfeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedBackSuccessStep
          onFeedbackTypeRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypeStep onFeedbackTypeChanged={setfeedbackType} />
          ) : (
            <FeedBackContextStep
              feedbackType={feedbackType}
              onFeedbackTypeRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setfeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="http://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
