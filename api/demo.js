export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    project: "Chila Bank Demo",
    mode: "DEMO",
    is_real_money: false,
    account: {
      name: "NGUYEN VAN A",
      number: "DEMO123456",
      balance: 100000000,
      currency: "VND"
    },
    transactions: [
      {
        id: "DEMO001",
        description: "Giao dịch thử nghiệm",
        amount: 5000000,
        type: "DEMO_CREDIT"
      }
    ]
  });
}
