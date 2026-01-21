import { useState, useRef, useEffect } from "react";

interface AudioNarrationProps {
  text: string;
  autoPlay?: boolean;
}

export function AudioNarration({ text, autoPlay = false }: AudioNarrationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      // Configure voice for friendly blue collar tone
      utterance.rate = 0.9; // Slightly slower for clear communication
      utterance.pitch = 0.9; // Slightly lower pitch for masculine, friendly tone
      utterance.volume = 1;

      // Try to find a male US English voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice =>
        voice.lang.startsWith('en-US') && voice.name.includes('Male')
      ) || voices.find(voice =>
        voice.lang.startsWith('en')
      );

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utterance.onpause = () => {
        setIsPaused(true);
      };

      utterance.onresume = () => {
        setIsPaused(false);
      };

      utteranceRef.current = utterance;

      // Auto-play if requested
      if (autoPlay && !isPlaying) {
        window.speechSynthesis.speak(utterance);
      }

      return () => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, [text, autoPlay]);

  // Load voices when they're available
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0 && utteranceRef.current) {
          const preferredVoice = voices.find(voice =>
            voice.lang.startsWith('en-US') && voice.name.includes('Male')
          ) || voices.find(voice =>
            voice.lang.startsWith('en')
          );

          if (preferredVoice && utteranceRef.current) {
            utteranceRef.current.voice = preferredVoice;
          }
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handlePlay = () => {
    if (!utteranceRef.current) return;

    if (isPaused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utteranceRef.current);
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!('speechSynthesis' in window)) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-full p-3">
            <svg
              className={`w-6 h-6 text-white ${isPlaying && !isPaused ? 'animate-pulse' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isPlaying && !isPaused ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a2 2 0 001.414.586h3.414a2 2 0 011.414.586l2.172 2.172a1 1 0 001.414 0V5.242a1 1 0 00-1.414 0l-2.172 2.172a2 2 0 01-1.414.586H7a2 2 0 01-2-2V5.414a2 2 0 012-2h1.414a2 2 0 001.414-.586l2.172-2.172a1 1 0 011.414 0"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-3a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              )}
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">🎙️ Audio Guide</h4>
            <p className="text-sm text-gray-600">Listen to a friendly walkthrough</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isPlaying || isPaused ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {isPaused ? 'Resume' : 'Play'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
              Pause
            </button>
          )}

          {isPlaying && (
            <button
              onClick={handleStop}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h12v12H6z"/>
              </svg>
              Stop
            </button>
          )}
        </div>
      </div>

      {isPlaying && (
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1 bg-blue-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full animate-progress" style={{ width: '100%' }}></div>
          </div>
          <span className="text-xs text-gray-600 font-mono">Playing...</span>
        </div>
      )}
    </div>
  );
}
