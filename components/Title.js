export default function Title(props) {
  return (
    <section id="title">
      <div>
        <h1>{props.headingText}</h1>
        <button type="button">{props.cta}</button>
        <button type="button">{props.cta}</button>
      </div>
      <div>
        <img src="/iphone6.png" alt="iphone-mockup" />
      </div>
    </section>
  );
}
