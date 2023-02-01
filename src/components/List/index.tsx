import'./style.scss';

const List: React.FC = () => {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JS",
      time: "01:00:00",
    },
    {
      task: "TS",
      time: "03:00:00",
    },
  ];

  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks?.map((task) => (
          <li key={task.task} className="item">
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
