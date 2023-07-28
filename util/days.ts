export default function getDays(review: any) {
  let reviewDate: any = new Date(review);
  // Get the current date
  let currentDate: any = new Date();
  // Calculate the difference in milliseconds
  let differenceInMilliseconds = Math.abs(currentDate - reviewDate);

  // Convert the difference to days
  let differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays === 0) {
    return "Today";
  } else if (differenceInDays === 1) {
    return "Yesterday";
  } else {
    return `${differenceInDays} days ago`;
  }
}
