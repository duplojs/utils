import { DString, N, E, pipe, when, whenNot } from "@duplojs/utils";

const timestamp = "2024-03-15T14:30:45.123Z";
const minLenght = 19;

const result = pipe(
	timestamp,
	when(
		(value) => N.greater(
			DString.length(value),
			minLenght,
		),
		(value) => {
			const year = DString.substring(value, 0, 4);
			const month = DString.substring(value, 5, 7);
			const day = DString.substring(value, 8, 10);
			const hour = DString.substring(value, 11, 13);
			const minute = DString.substring(value, 14, 16);
			const second = DString.substring(value, 17, 19);

			return E.success({
				date: {
					year,
					month,
					day,
				},
				time: {
					hour,
					minute,
					second,
				},
				formatted: {
					date: `${day}/${month}/${year}`,
					time: `${hour}:${minute}:${second}`,
					datetime: `${day}/${month}/${year} ${hour}:${minute}`,
				},
			});
		},
	),
	whenNot(
		E.isRight,
		() => E.error("Invalid timestamp format"),
	),
);

/**
 * result: E.EitherSuccess<{
 *     date: { year: "2024", month: "03", day: "15" },
 *     time: { hour: "14", minute: "30", second: "45" },
 *     formatted: {
 *       date: "15/03/2024",
 *       time: "14:30:45",
 *       datetime: "15/03/2024 14:30"
 *     }
 * }> | E.EitherError<"Invalid timestamp format">
 */
