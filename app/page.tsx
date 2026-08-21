'use client'

import { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState("");
  const [tax, setTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [takeHome, setTakeHome] = useState<number | null>(null);
const salaryAmount = Number(salary) || 0;
const taxAmount = salaryAmount * ((Number(tax) || 0) / 100);
const insuranceAmount =
  salaryAmount * ((Number(insurance) || 0) / 100);

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
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
  {["200000", "250000", "300000", "400000"].map((value) => (
    <button
      key={value}
      type="button"
      onClick={() => setSalary(value)}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        salary === value
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white text-gray-700"
      }`}
    >
      {Number(value).toLocaleString()}円
    </button>
  ))}
</div>

          <input
            type="number"
            placeholder="所得税（％）"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            className="w-full border p-3 rounded"
          />
<div className="mt-2 grid grid-cols-3 gap-2">
  {["5", "10", "15"].map((value) => (
    <button
      key={value}
      type="button"
      onClick={() => setTax(value)}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        tax === value
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white text-gray-700"
      }`}
    >
      {value}%
    </button>
  ))}
</div>
          <input
            type="number"
            placeholder="社会保険料（％）"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="w-full border p-3 rounded"
          />
<div className="mt-2 grid grid-cols-3 gap-2">
  {["10", "15", "20"].map((value) => (
    <button
      key={value}
      type="button"
      onClick={() => setInsurance(value)}
      className={`rounded-lg border px-3 py-2 text-sm font-bold ${
        insurance === value
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white text-gray-700"
      }`}
    >
      {value}%
    </button>
  ))}
</div>
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
  <div className="mt-6 rounded-xl border bg-gray-50 p-5">
    <h2 className="mb-4 text-xl font-bold">
      手取りシミュレーション結果
    </h2>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">月収（額面）</span>
        <span className="font-bold">
          {salaryAmount.toLocaleString()}円
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          所得税（{Number(tax) || 0}%）
        </span>
        <span className="font-bold">
          -{Math.round(taxAmount).toLocaleString()}円
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          社会保険料（{Number(insurance) || 0}%）
        </span>
        <span className="font-bold">
          -{Math.round(insuranceAmount).toLocaleString()}円
        </span>
      </div>

      <div className="flex justify-between border-t pt-3">
        <span className="font-bold">控除合計</span>
        <span className="font-bold">
          -{Math.round(taxAmount + insuranceAmount).toLocaleString()}円
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-white p-4 text-center">
        <p className="text-sm text-gray-600">手取り額の目安</p>
        <p className="mt-1 text-3xl font-bold text-green-600">
          {Math.round(takeHome).toLocaleString()}円
        </p>
      </div>
    </div>

    <p className="mt-4 text-xs leading-relaxed text-gray-500">
      ※簡易シミュレーションです。住民税・扶養・各種控除などは
      計算に含まれていません。実際の手取り額とは異なる場合があります。
    </p>
  </div>
)}

        </div>
        <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="text-xl font-bold mb-2">
    月収別の手取り早見表
  </h2>

  <p className="mb-4 text-sm text-gray-600">
    税金・社会保険料などを合計20%として計算した場合の目安です。
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">月収（額面）</th>
          <th className="border p-2">控除額の目安</th>
          <th className="border p-2">手取りの目安</th>
        </tr>
      </thead>

      <tbody>
        {[
          [200000, 40000, 160000],
          [250000, 50000, 200000],
          [300000, 60000, 240000],
          [350000, 70000, 280000],
          [400000, 80000, 320000],
          [500000, 100000, 400000],
        ].map(([salary, deduction, takeHome]) => (
          <tr key={salary}>
            <td className="border p-2">
              {salary.toLocaleString()}円
            </td>
            <td className="border p-2">
              {deduction.toLocaleString()}円
            </td>
            <td className="border p-2 font-semibold">
              {takeHome.toLocaleString()}円
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="mt-3 text-xs text-gray-500">
    ※実際の手取り額は、所得税・住民税・社会保険料・扶養状況などによって異なります。
  </p>
</section>
<section className="mt-10 text-left">
  <h2 className="text-2xl font-bold mb-3">
    月収30万円の手取りはいくら？
  </h2>

  <p className="leading-7">
    月収30万円でも、30万円すべてを受け取れるわけではありません。
    給料から所得税や社会保険料などが差し引かれるため、
    実際の手取り額は額面より少なくなります。
    例えば控除額を合計20%として計算すると、
    月収30万円の手取り目安は約24万円です。
  </p>
</section>
<section className="mt-10 text-left">
  <h2 className="text-2xl font-bold mb-3">
    額面給与から手取りを計算するには？
  </h2>

  <p className="leading-7">
    額面給与とは、税金や社会保険料などが差し引かれる前の給与です。
    実際に受け取る手取り額を確認するには、
    額面給与から所得税や社会保険料などの控除額を差し引いて計算します。
    このツールでは月収と控除率を入力することで、
    額面から手取りの目安を簡単に計算できます。
  </p>
</section>
<section className="mt-10 text-left">
  <h2 className="text-2xl font-bold mb-3">
    給料の手取りは額面の何％くらい？
  </h2>

  <p className="leading-7">
    給料の手取り額は、額面給与から所得税や社会保険料などを
    差し引いた金額です。
    控除される割合は給与額や条件によって異なるため、
    額面だけでは実際に受け取れる金額は分かりません。
    このツールでは所得税率と社会保険料率を自由に設定して、
    給料の手取り目安を確認できます。
  </p>
</section>
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
<section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      手取り計算ツールの使い方
    </h2>
   <p>
  この手取り計算ツールは、月収・所得税率・社会保険料率を入力すると、
  税金と社会保険料を差し引いた手取り額の目安を自動計算できる無料ツールです。
  給与確認や転職時の収入比較にも役立ちます。
</p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      こんな人におすすめ
    </h2>
    <p>
      毎月の給与明細を確認したい方、転職前に収入を比較したい方、
      額面給与から実際に受け取れる金額を知りたい方におすすめです。
      副業収入のシミュレーションにも使えます。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      計算例
    </h2>
    <p>
      例えば月給30万円の場合、税金や社会保険料を差し引くと、
      実際の手取り額はおよそ24万円前後になることがあります。
      手取り額を事前に把握することで生活設計に役立ちます。
    </p>
  </div>
<div>
  <h2 className="text-2xl font-bold mb-3">
    手取り額の計算方法
  </h2>

  <p className="mb-3">
    このツールでは、月収から所得税と社会保険料を差し引いて、
    手取り額の目安を計算しています。
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>所得税額 ＝ 月収 × 所得税率</li>
    <li>社会保険料 ＝ 月収 × 社会保険料率</li>
    <li>手取り額 ＝ 月収 − 所得税額 − 社会保険料</li>
  </ul>

  <p className="mt-3 text-sm text-gray-600">
    実際の手取り額は、住民税・各種控除・扶養状況などによって変わります。
    このツールの計算結果は目安としてご利用ください。
  </p>
</div>
  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. ボーナスも計算できますか？<br />
      A. このツールは通常給与をベースにした手取り計算です。<br /><br />

      Q. 正確な税額になりますか？<br />
      A. 目安計算として利用でき、実際の金額は条件によって異なります。
    </p>
  </div>

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