import React from 'react';
import Card from './Card';
import Button from './Button';

const DesignSystem: React.FC = () => {
  return (
    <section id="design-system" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            Internal Documentation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">
            KitaSohib Design System
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Clean, Calm, Modern Blue. Focused on readability and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Colors */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">1. Color Palette</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-2xl bg-primary shadow-sm"></div>
                <div>
                  <p className="font-bold text-slate-900">Primary</p>
                  <p className="text-xs text-slate-500">Blue #2F5FD0</p>
                  <p className="text-xs text-slate-400">Trust, Calm</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-2xl bg-gradient-to-r from-[#2F5FD0] to-[#4C7DF0] shadow-sm"></div>
                <div>
                  <p className="font-bold text-slate-900">Gradient</p>
                  <p className="text-xs text-slate-500">Brand Gradient</p>
                  <p className="text-xs text-slate-400">Modern Feel</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-2xl bg-background border border-slate-200 shadow-sm"></div>
                <div>
                  <p className="font-bold text-slate-900">Background</p>
                  <p className="text-xs text-slate-500">Gray #F4F6FA</p>
                  <p className="text-xs text-slate-400">Low Contrast</p>
                </div>
              </div>
               <div className="space-y-2">
                <div className="h-24 rounded-2xl bg-slate-900 shadow-sm"></div>
                <div>
                  <p className="font-bold text-slate-900">Text Dark</p>
                  <p className="text-xs text-slate-500">Slate #1E293B</p>
                  <p className="text-xs text-slate-400">Headings</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-10 mb-6 text-slate-800">2. Typography</h3>
            <div className="space-y-6">
              <div className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <p className="text-sm text-slate-500 mb-2">Font Family: <strong>Inter</strong></p>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                  Modern & Legible.
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Inter provides a clean, neutral look that is highly readable on screens. It fits the "Modern Gen Z" aesthetic perfectly without being too playful or too stiff.
                </p>
              </div>
            </div>
          </div>

          {/* UI Elements */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">3. UI Components</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-500">Buttons</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-xl">Primary</Button>
                  <Button variant="outline" className="rounded-xl">Outline</Button>
                  <Button variant="ghost" className="rounded-xl">Ghost</Button>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-500">Cards</p>
                <Card className="rounded-2xl shadow-soft border border-slate-100">
                  <h4 className="font-bold text-lg mb-2">Card Standard</h4>
                  <p className="text-slate-600 text-sm">
                    Rounded-2xl (16px). Subtle border. Soft shadow.
                  </p>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignSystem;