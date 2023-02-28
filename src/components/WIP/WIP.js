import './wip.css'

const WIP = ({ page }) => {
  return (
    <section>
      <main>
      <h1>{page}</h1>
      <h2>Coming Soon !</h2>
        <p>
          This page is currently under development. Please stay tuned for
          updates!
        </p>
        <div>
          <img src="coming_soon.jpg" alt="Page under construction" />
        </div>
      </main>
    </section>
  );
};
export default WIP;
