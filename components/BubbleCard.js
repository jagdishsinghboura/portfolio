
export default function BubbleCard({ children }) {
  return (
    <div className="group relative w-72 h-auto p-6 rounded-2xl
                    bg-gradient-to-br from-blue-200 to-blue-300 
                    dark:from-slate-700 dark:to-slate-800
                    shadow-xl overflow-hidden cursor-pointer
                    transition-all duration-700
                    hover:scale-[1.07] hover:-rotate-1 hover:shadow-2xl">

      <div className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0
                      group-hover:opacity-40 blur-xl
                      transition-all duration-700"></div>

      <div className="absolute w-36 h-36 bg-white/30 dark:bg-white/10 
                      rounded-full blur-3xl
                      top-12 left-14 opacity-20
                      group-hover:translate-x-6 group-hover:-translate-y-6 
                      transition-all duration-700 ease-out"></div>

      <div className="relative z-10 text-black dark:text-white font-semibold">
        {children}
      </div>
    </div>
  );
}
