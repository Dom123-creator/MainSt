import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

interface AudioNarrationProps {
  text: string;
  autoPlay?: boolean;
}

export function AudioNarration({ text, autoPlay = false }: AudioNarrationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Generate audio using ElevenLabs API (or fallback to browser TTS)
  useEffect(() => {
    const generateAudio = async () => {
      try {
        setIsLoading(true);

        // Try ElevenLabs API first for natural voice
        // Using a free voice ID for "Adam" - a natural male voice
        const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;

        if (ELEVENLABS_API_KEY) {
          // ElevenLabs API - Natural human voice
          const response = await fetch(
            'https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB', // Adam voice
            {
              method: 'POST',
              headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': ELEVENLABS_API_KEY,
              },
              body: JSON.stringify({
                text: text,
                model_id: 'eleven_monolingual_v1',
                voice_settings: {
                  stability: 0.5,
                  similarity_boost: 0.75,
                  style: 0.0,
                  use_speaker_boost: true
                }
              })
            }
          );

          if (response.ok) {
            const audioBlob = await response.blob();
            const url = URL.createObjectURL(audioBlob);
            setAudioUrl(url);
            setIsLoading(false);
            return;
          }
        }

        // Fallback: Use Web Speech API with best available voice
        useFallbackTTS();
      } catch (error) {
        console.error('Audio generation error:', error);
        useFallbackTTS();
      }
    };

    const useFallbackTTS = () => {
      // Use browser's Text-to-Speech as fallback
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 0.85;
        utterance.volume = 1;

        // Try to find the best male voice
        const loadVoices = () => {
          const voices = window.speechSynthesis.getVoices();
          const maleVoice = voices.find(voice =>
            (voice.name.includes('Male') || voice.name.includes('David') || voice.name.includes('Daniel')) &&
            voice.lang.startsWith('en')
          ) || voices.find(voice => voice.lang.startsWith('en-US'));

          if (maleVoice) {
            utterance.voice = maleVoice;
          }
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);

        audioRef.current = utterance as any;
        setIsLoading(false);
      }
    };

    generateAudio();

    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [text]);

  // Setup audio element when URL is ready
  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);

      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));

      audioRef.current = audio;

      if (autoPlay) {
        audio.play().catch(err => {
          console.error('Autoplay failed:', err);
          toast.error('Click Play to start audio');
        });
      }

      return () => {
        audio.pause();
        audio.src = '';
      };
    }
  }, [audioUrl, autoPlay]);

  const handlePlay = () => {
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.play();
    } else if (audioRef.current) {
      // Fallback TTS
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(audioRef.current as any);
    }
  };

  const handlePause = () => {
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.pause();
    } else {
      window.speechSynthesis.pause();
    }
  };

  const handleStop = () => {
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    } else {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-full p-3">
            <svg
              className={`w-6 h-6 text-white ${isPlaying ? 'animate-pulse' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isPlaying ? (
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
            <p className="text-sm text-gray-600">
              {audioUrl ? 'Natural human voice walkthrough' : 'Listen to a friendly walkthrough'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 rounded-lg">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Loading...
            </div>
          ) : !isPlaying ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </button>
          ) : (
            <>
              <button
                onClick={handlePause}
                className="flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                Pause
              </button>
              <button
                onClick={handleStop}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h12v12H6z"/>
                </svg>
                Stop
              </button>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {(isPlaying || currentTime > 0) && duration > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 font-mono w-12">{formatTime(currentTime)}</span>
            <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                if (audioRef.current instanceof HTMLAudioElement && duration > 0) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const percent = (e.clientX - rect.left) / rect.width;
                  audioRef.current.currentTime = percent * duration;
                }
              }}
            >
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-gray-600 font-mono w-12">{formatTime(duration)}</span>
          </div>
        </div>
      )}

      {/* Info Badge */}
      {!audioUrl && !isLoading && (
        <div className="mt-3 text-xs text-gray-500 bg-white bg-opacity-60 rounded-lg px-3 py-2">
          💡 Tip: For the best natural voice experience, add VITE_ELEVENLABS_API_KEY to your .env file
        </div>
      )}
    </div>
  );
}
