'use client'

import { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState("");
  const [tax, setTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [takeHome, setTakeHome] = useState<number | null>(null);

  const calculate = () => {
    const s = Number(salary);
    const t = Number(tax);
    const i = Number(insurance);

    const result = s - (s * t / 100) - (s * i / 100);

    setTakeHome(result);
  };

  const reset = () => {
    setSalary("");
    setTax("");
    setInsurance("");
    setTakeHome(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 w-full">

        <h1 className="text-3xl font-bold text-center mb-6">
          手取り計算ツール
        </h1>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="月収（円）"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            placeholder="所得税（％）"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            placeholder="社会保険料（％）"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            onClick={calculate}
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            計算する
          </button>

          <button
            onClick={reset}
            className="w-full bg-gray-400 text-white p-3 rounded"
          >
            リセット
          </button>

          {takeHome !== null && (
            <div className="mt-6 text-lg font-bold">
              <p>手取り額：¥{takeHome.toLocaleString()}</p>
            </div>
          )}

        </div>
        <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    手取り額を確認することが重要な理由
  </h2>

  <p className="mb-3">
    給料は額面金額そのまま受け取れるわけではなく、
    所得税や社会保険料が差し引かれます。
  </p>

  <p className="mb-3">
    実際に受け取れる手取り額を把握することで、
    毎月の生活費や貯金計画を立てやすくなります。
  </p>

  <p>
    この手取り計算ツールでは月収・所得税・社会保険料を入力するだけで、
    手取り額を自動計算できます。
  </p>
</section>

<section className="mt-10 rounded-xl border bg-white p-5">
<h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
</section>

<section className="mt-10 bg-white rounded-xl p-6">
  <p className="text-sm text-gray-700 leading-7">
    このサイトでは、仕事・給与・副業に役立つ無料計算ツールを公開しています。
    時給計算・残業代計算・手取り計算・年収計算など、
    日々の収入確認に便利なツールを今後追加していきます。
  </p>
</section>

<div className="mt-6 text-center">
  <a
    href="/privacy-policy"
    className="text-sm text-blue-600 underline"
  >
    プライバシーポリシー
  </a>
</div>

<footer className="mt-6 text-center text-sm text-gray-500">
  ANT FARM Project | Colony B
</footer>
      </div>
    </div>
  );
}