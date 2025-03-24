// app/page.tsx
export default function Home() {
  return (
    <div className="mt-10 flex items-center justify-center gap-10 bg-base-400">
      <div
        className="card w-96 hover:bg-base-300 flex flex-col items-center justify-center hover:translate-y-[-5px] transition-all duration-300 cursor-pointer p-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="w-80 h-36 bg-slate-300 rounded-3xl shadow-xs"></div>
        <div className="card-body -mt-3 ml-3">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-96 hover:bg-base-300 flex flex-col items-center justify-center hover:translate-y-[-5px] transition-all duration-300 cursor-pointer p-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-80 h-36 bg-slate-300 rounded-3xl shadow-xs"></div>
        <div className="card-body -mt-3 ml-3">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-96 hover:bg-base-300 flex flex-col items-center justify-center hover:translate-y-[-5px] transition-all duration-300 cursor-pointer p-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-80 h-36 bg-slate-300 rounded-3xl shadow-xs"></div>
        <div className="card-body -mt-3 ml-3">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-96 hover:bg-base-300 flex flex-col items-center justify-center hover:translate-y-[-5px] transition-all duration-300 cursor-pointer p-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="w-80 h-36 bg-slate-300 rounded-3xl shadow-xs"></div>
        <div className="card-body -mt-3 ml-3">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}
