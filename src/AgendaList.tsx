const agenda = [
  { time: "10:00 AM", event: "Wedding Ceremony" },
  { time: "12:00 PM", event: "Lunch Reception" },
  { time: "3:00 PM", event: "Photo Session" },
  { time: "6:00 PM", event: "Dinner & Party" }
];

export default function AgendaList() {
  return (
    <div className="card mb-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Wedding Agenda</h2>

        {/* Display the GIF */}
        <div className="text-center mb-4">
          <img src="public/image/marriage.gif" alt="Cheer Animation" style={{ maxWidth: "120px", height: "auto" }} />
        </div>

        <ul className="list-group list-group-flush">
          {agenda.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <strong>{item.time}</strong>
              <span>{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
