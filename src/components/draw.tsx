
interface DrawProps {
  attempt: number;
}

function Draw({ attempt }: DrawProps) {
  const bodyParts = [
    // Kepala
    <div
      key="head"
      className="absolute left-[164px] top-12 size-11 rounded-full border-4 border-black"
    />,

    // Badan
    <div
      key="body"
      className="absolute left-[184px] top-23 h-20 border-l-4 border-black"
    />,

    // Tangan kiri
    <div
      key="left-arm"
      className="absolute left-[148px] top-28 w-10 -rotate-45 border-t-4 border-black"
    />,

    // Tangan kanan
    <div
      key="right-arm"
      className="absolute left-[184px] top-28 w-10 rotate-45 border-t-4 border-black"
    />,

    // Kaki kiri
    <div
      key="left-leg"
      className="absolute left-[150px] top-44 w-10 -rotate-50 border-t-4 border-black"
    />,

    // Kaki kanan
    <div
      key="right-leg"
      className="absolute left-[184px] top-44 w-10 rotate-50 border-t-4 border-black"
    />,
  ];

  return (
    <div className="relative h-64 w-64">
      {/* Tiang atas */}
      <div className="absolute left-8 top-0 w-40 border-t-4 border-black" />

      {/* Tiang vertikal */}
      <div className="absolute left-8 top-0 h-56 border-l-4 border-black" />

      {/* Alas */}
      <div className="absolute bottom-2 left-0 w-56 border-t-4 border-black" />

      {/* Tali */}
      <div className="absolute left-[184px] top-0 h-12 border-l-4 border-black" />

      {/* Bagian tubuh */}
      {bodyParts.slice(0, attempt)}
    </div>
  );
}

export default Draw;
