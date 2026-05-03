import { Shield, Ticket, Gift, Brain, BarChart3, Bot, ArrowRight, Sparkles, Terminal, Crown, Lock, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function GuardianVelionWebsite() {
  const features = [
    { icon: Shield, title: "Auto Moderation", text: "Filtrează spam, raid-uri, linkuri suspecte și comportament abuziv înainte să devină haos." },
    { icon: Ticket, title: "Ticket Control", text: "Categorii clare, panou premium, claim staff și flux rapid pentru suport real." },
    { icon: Gift, title: "Giveaway Engine", text: "Giveaway-uri automate, recovery după restart și mesaje curate pentru comunitate." },
    { icon: Brain, title: "AI Assistant", text: "Rezumat tichete, ajutor staff, texte inteligente și organizare rapidă." },
    { icon: BarChart3, title: "Live Stats", text: "Monitorizează activitatea serverului, tichetele, giveaway-urile și acțiunile staff." },
    { icon: Lock, title: "Security Layer", text: "Protecție discretă pentru comunitate, fără interfețe încărcate sau mesaje inutile." },
  ];

  return (
    <main className="min-h-screen bg-[#030705] text-white overflow-hidden selection:bg-emerald-400/30">
      <section className="relative min-h-screen px-6 py-8 flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,255,120,0.20),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(245,185,65,0.14),transparent_30%),linear-gradient(180deg,rgba(3,7,5,0.1),#030705)]" />
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-400/10 to-transparent" />

        <nav className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-300 via-yellow-200 to-emerald-700 p-[1px]">
              <div className="h-full w-full rounded-2xl bg-black flex items-center justify-center">
                <Crown className="text-yellow-200" size={22} />
              </div>
            </div>
            <div>
              <div className="font-black tracking-wide">Guardian</div>
              <div className="text-xs text-emerald-200/70">Velion Engine</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a className="hover:text-white transition">Systems</a>
            <a className="hover:text-white transition">Security</a>
            <a className="hover:text-white transition">Dashboard</a>
          </div>

          <button className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-5 py-2 text-sm font-bold text-emerald-100 hover:bg-emerald-300/15 transition">
            Invite Bot
          </button>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto flex-1 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/[0.04] px-4 py-2 text-sm text-emerald-100 shadow-2xl shadow-emerald-500/10 mb-7">
              <Sparkles size={16} /> Discord Guardian System
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.06em]">
              Control total.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-yellow-200 to-emerald-400">Zero haos.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg md:text-xl text-zinc-300 leading-relaxed">
              Guardian este nucleul automatizat al comunității Velion: moderare, tichete, giveaway-uri, AI și statistici într-un singur sistem premium.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="group rounded-2xl bg-gradient-to-r from-emerald-300 to-yellow-200 px-7 py-4 font-black text-black shadow-[0_0_45px_rgba(52,211,153,0.25)] flex items-center gap-2 hover:scale-[1.02] transition">
                Add to Discord <ArrowRight size={19} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 font-black text-white hover:bg-white/[0.08] transition">
                Vezi sistemele
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
              {["24/7", "AI", "Secure"].map((x, i) => (
                <div key={x} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="text-2xl font-black text-emerald-200">{x}</div>
                  <div className="text-xs text-zinc-500 mt-1">{i === 0 ? "online" : i === 1 ? "powered" : "layer"}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-yellow-400/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#07110b]/80 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-emerald-300/15 bg-black/40 p-5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-300/10 border border-emerald-300/20 flex items-center justify-center">
                      <Bot className="text-emerald-200" />
                    </div>
                    <div>
                      <div className="font-black text-xl">Guardian Console</div>
                      <div className="text-xs text-zinc-500">Velion Engine v1.0</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300 text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" /> Online
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    [Activity, "Systems", "6 active"],
                    [Ticket, "Tickets", "0 pending"],
                    [Gift, "Giveaways", "1 live"],
                    [Shield, "Security", "protected"],
                  ].map(([Icon, label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="text-yellow-200 mb-3" size={22} />
                      <div className="text-sm text-zinc-500">{label}</div>
                      <div className="font-black">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                  <div className="flex items-center gap-2 text-emerald-200 font-bold">
                    <Terminal size={18} /> System message
                  </div>
                  <p className="text-zinc-300 text-sm mt-2">Detectează. Decide. Acționează. Învață.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-24 border-t border-white/10 bg-black/25">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-emerald-300 font-black tracking-[0.25em] text-sm uppercase">Velion Systems</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] mt-4">Un bot construit ca un sistem de joc.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item) => (
              <div key={item.title} className="group rounded-[1.7rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-6 hover:border-emerald-300/25 transition">
                <div className="h-12 w-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition">
                  <item.icon className="text-emerald-200" size={24} />
                </div>
                <h3 className="font-black text-2xl">{item.title}</h3>
                <p className="text-zinc-400 mt-3 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.18),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-10 md:p-16 text-center shadow-2xl shadow-emerald-950/40">
          <p className="text-yellow-200 font-black tracking-[0.25em] text-sm uppercase">Ready for deployment</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] mt-5">Activează Guardian.</h2>
          <p className="text-zinc-300 mt-5 text-lg">Nu îl vezi. Dar controlează tot.</p>
          <button className="mt-9 rounded-2xl bg-white px-8 py-4 font-black text-black hover:bg-emerald-100 transition">
            Invite Guardian
          </button>
        </div>
      </section>
    </main>
  );
}
