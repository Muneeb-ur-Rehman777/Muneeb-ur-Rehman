export default function CTA() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">

          <div className="rounded-3xl bg-slate-950 py-20 px-8 text-center">

            <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              Let's Build Something Great
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Looking for a Developer
              <br />
              Who Solves Problems?
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-slate-300 leading-8">

              I'm always excited to work on meaningful software that solves
              real-world business problems. Whether it's a full-stack web
              application, backend system, or a challenging engineering task,
              I'd love to be part of it.

            </p>

            <a
              href="#contact"
              className="inline-flex mt-10 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold transition"
            >
              Let's Connect
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}