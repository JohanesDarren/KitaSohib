import React, { useState } from 'react';
import { getSupportiveMessage } from '../services/geminiService';
import Card from './Card';
import Button from './Button';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const MoodCheck: React.FC = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckIn = async () => {
    if (!mood.trim()) return;

    setLoading(true);
    setResponse('');

    const message = await getSupportiveMessage(mood, "Pengguna sedang mencoba fitur demo di landing page.");

    setResponse(message);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-10 relative z-10">
        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Live Demo</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Bagaimana Perasaanmu Sekarang?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Tulis apa yang lagi kamu rasain, SohibAI bakal kasih respon hangat buat kamu.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700 shadow-xl shadow-primary/5 rounded-2xl p-8">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Gimana kabarmu?</label>
            <textarea
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Contoh: Lagi capek banget tugas numpuk..."
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-slate-900 min-h-[120px] resize-none font-sans text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all cursor-text"
            />

            <Button
              onClick={handleCheckIn}
              disabled={loading || !mood.trim()}
              fullWidth
              variant="primary"
              className="rounded-xl shadow-lg shadow-primary/20"
              icon={loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
            >
              {loading ? 'SohibAI sedang mengetik...' : 'Kirim ke SohibAI'}
            </Button>
          </div>

          {response && (
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900/50 rounded-2xl border border-primary-100 dark:border-slate-700 animate-fade-in shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-2.5 rounded-xl shrink-0 shadow-md shadow-primary/20">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Pesan dari SohibAI:</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                    {response}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default MoodCheck;