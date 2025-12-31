import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div
      id="card"
      className="max-w-[1320 px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]"
    >
      <div className="flex flex-col rounded-lg bg-black-200 shadow-sm max-w-96 p-8 my-6 border border-slate-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900">
        <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
          <p className="text-lg uppercase font-semibold text-blue-500">
            Beginner-Friendly
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
            <span className="text-3xl"></span>6
            <span className="self-end text-3xl">module</span>
          </h1>
        </div>

        <div className="p-0 mt-12">
          <button
            className="min-w-32 w-full rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-600 transition-all shadow-md hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 hover:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => navigate("/page1")}
          >
            Start Now
          </button>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-black-200 shadow-sm max-w-96 p-8 my-6 border border-slate-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900">
        <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
          <p className="text-lg uppercase font-semibold  text-blue-500">
            Intermediate-Level
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
            <span className="text-3xl"></span>4
            <span className="self-end text-3xl">module</span>
          </h1>
        </div>

        <div className="p-0 mt-12">
          <button
            className="min-w-32 w-full rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-600 transition-all shadow-md hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 hover:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => navigate("/page2")}
          >
            Start Now
          </button>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-black-200 shadow-sm max-w-96 p-8 my-6 border border-slate-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900">
        <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
          <p className="text-lg uppercase font-semibold  text-blue-500">
            Specialized Training
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
            <span className="text-3xl"></span>4
            <span className="self-end text-3xl">module</span>
          </h1>
        </div>

        <div className="p-0 mt-12">
          <button
            className="min-w-32 w-full rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-600 transition-all shadow-md hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 hover:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => navigate("/page3")}
          >
            Start Now
          </button>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-black-200 shadow-sm max-w-96 p-8 my-6 border border-slate-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-900">
        <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-slate-600">
          <p className="text-lg uppercase font-semibold text-blue-500">
            Advanced Platforms
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
            <span className="text-3xl"></span>3
            <span className="self-end text-3xl">module</span>
          </h1>
        </div>

        <div className="p-0 mt-12">
          <button
            className="min-w-32 w-full rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-600 transition-all shadow-md hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 hover:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => navigate("/page4")}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
