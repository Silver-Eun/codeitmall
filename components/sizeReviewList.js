function formatDate(date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const YY = String(date.getUTCDate()).padStart(2, "0");
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}. ${MM}. ${dd}`;
}

const labels = {
  sex: {
    male: "남자",
    female: "여자",
  },
  fit: {
    small: "작음",
    good: "적당함",
    big: "큼",
  },
};

export default function SizeReviewList({ SizeReviews }) {
  return (
    <ul>
      {SizeReviews.map((SizeReview) => (
        <li key={SizeReview.id}>
          <div>
            <div>
              <div>{formatDate(new Date(SizeReview.createdAt))}</div>
            </div>
            <div>
              ({labels.sex[SizeReview.sex]} {SizeReview.height}cm{" "}
              {SizeReview.size})
            </div>
          </div>
          <div>{label.fir[SizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  );
}
