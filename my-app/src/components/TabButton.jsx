export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* use object destructuring to get access to the prop
      component composition - this children prop reffer to the content between component tag in App.js
      onClick is a event listener for events in react
      the value should be a function
      */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
