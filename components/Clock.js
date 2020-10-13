const pad = (n) => (n < 10 ? `0${n}` : n);

const format = (t) => {
  const hours = t.getUTCHours();
  const minutes = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function Clock({ lastUpdate, light }) {
  return (
    <div className={light ? "light" : ""}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          display: inline-block;
          color: #82fa58;
          background-color: #000;
        }
        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
}

export default Clock;
