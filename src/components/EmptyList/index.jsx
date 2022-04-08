import "./style.css";

function EmptyList() {
  return (
    <div className="emptyList">
      <h2>Você ainda não possui nenhum lançamento</h2>
      <div className="nullTransaction">
        <div className="nullDescription"></div>
        <div className="nullDetail"></div>
      </div>
      <div className="nullTransaction">
        <div className="nullDescription"></div>
        <div className="nullDetail"></div>
      </div>
      <div className="nullTransaction">
        <div className="nullDescription"></div>
        <div className="nullDetail"></div>
      </div>
    </div>
  );
}

export default EmptyList;
