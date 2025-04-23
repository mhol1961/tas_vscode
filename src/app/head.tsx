export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem(&apos;theme');
                if (storedTheme === &apos;dark') {
                  document.documentElement.classList.add(&apos;dark');
                } else if (storedTheme === &apos;light') {
                  document.documentElement.classList.remove(&apos;dark');
                } else {
                  const prefersDark = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;).matches;
                  if (prefersDark) {
                    document.documentElement.classList.add(&apos;dark');
                  }
                }
              } catch (e) {
                console.error(&apos;Error applying theme:&apos;, e);
              }
            })();
          `,
        }}
      />
    </>
  );
}
