import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2 } from 'lucide-react';

export default function AudioPlayer({ autoStartSignal }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const startRomanticMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      // Gentle Pentatonic / Romantic acoustic chords frequency array (Hz)
      const notes = [
        293.66, 369.99, 440.00, 554.37, // D4, F#4, A4, C#5
        329.63, 440.00, 493.88, 659.25, // E4, A4, B4, E5
        293.66, 369.99, 440.00, 587.33  // D4, F#4, A4, D5
      ];
      let noteIdx = 0;

      const playNextNote = () => {
        if (!audioCtxRef.current) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft sine wave for gentle music box sound
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIdx % notes.length], now);

        // Soft attack, gentle decay
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);

        noteIdx++;
      };

      playNextNote();
      timerRef.current = setInterval(playNextNote, 600);
      setIsPlaying(true);
    } catch (e) {
      console.error("Audio playback error:", e);
    }
  };

  const stopRomanticMelody = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopRomanticMelody();
    } else {
      startRomanticMelody();
    }
  };

  // Trigger playback when autoStartSignal fires (user taps to open invitation)
  useEffect(() => {
    if (autoStartSignal && !isPlaying) {
      startRomanticMelody();
    }
  }, [autoStartSignal]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
        isPlaying
          ? 'bg-[#56654f] text-white shadow-md scale-105 animate-pulse'
          : 'bg-[#e7e1d5] text-[#4a5644] hover:bg-[#d8d0c2]'
      }`}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <Music className="w-4 h-4" />
      )}
    </button>
  );
}
