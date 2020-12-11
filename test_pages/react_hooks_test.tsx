import { React } from 'https://deno.land/x/pagic@v1.0.0-beta.2/mod.ts';

const ReactHooksTest = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>React hooks test</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count +1</button>
    </>
  );
};

export const frontMatter = {
  title: 'React hooks test',
};

export default ReactHooksTest;
