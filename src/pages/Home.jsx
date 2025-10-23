import Main from "../layouts/Main.jsx";

const Home = () => {
  const expenses = [
    {
      subject: "Beli Makan",
      date: "2024-06-01",
      amount: 50000,
    },
    {
      subject: "Goodhand coffee",
      date: "2024-06-01",
      amount: 50000,
    },
  ];
  return (
    <Main>
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl font-bold text-center lg:text-left">
          Hello, Arel
        </h1>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-semibold text-center lg:text-left">
            Recent Expenses
          </h3>
          <div className="overflow-x-auto">
            <table className="table bg-[#191E24] rounded-3xl">
              <thead>
                <tr>
                  <th></th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{expense.subject}</td>
                    <td>{expense.date}</td>
                    <td>{expense.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
