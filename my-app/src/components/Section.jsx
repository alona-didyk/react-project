export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {/* we use children to output the content in Section */}
      {children}
    </section>
  );
}

// rest property ... - groups all remaining object properties into a new object(named props in this case)
// in section we use ... to spread some data
// this ensure that all extra props that might be set on our custom component will be forwarded to built-in Section element
