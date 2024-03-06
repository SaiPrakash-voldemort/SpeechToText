import React, { useState } from "react";
import "./DisplayText.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
const DisplayText = () => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const { resetTranscript } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="totalDiv">
      <div className="textBox" onChange={() => setTextToCopy(transcript)}>
        {transcript}
      </div>
      <div className="buttonsDiv">
        <button onClick={startListening} className="">
          StartListening
        </button>
        <button onClick={stopListening} className="">
          StopListening
        </button>
      </div>
    </div>
  );
};

export default DisplayText;
