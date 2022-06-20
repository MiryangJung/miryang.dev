import usDateString from '../lib/usDateString';

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="w-full flex flex-col prose dark:prose-invert">
      <h1>{title}</h1>
      {date && (
        <span className="text-sm font-light mb-5">{usDateString(date)}</span>
      )}
      {children}
    </div>
  );
};

export default MDXPost;
