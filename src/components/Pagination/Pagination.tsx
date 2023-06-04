import classes from './Pagination.module.scss'
import {FC, PropsWithChildren} from 'react'
import cn from 'classnames'

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	separator: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>, page: number) => void;
}

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({totalPages, currentPage, separator, onClick}) => {
	const showAfterFirst = currentPage + 1 < 5
	const showBeforeLast = currentPage + 1 > totalPages - 4
	
	const createArrayButtons = (quantity: number, startNumber: number) => {
		const newArr = [...Array.from({ length: quantity })]
		return newArr.map((n, i) => startNumber + i)
	}
	
	const buttonsToRender =
		totalPages > 8
			? [
				1,
				showAfterFirst && createArrayButtons(4, 2),
				!showAfterFirst && separator,
				!(showAfterFirst || showBeforeLast) && createArrayButtons(3, currentPage),
				!showBeforeLast && separator,
				showBeforeLast && createArrayButtons(4, totalPages - 4),
				totalPages
			]
				.flat()
				.filter(Boolean)
			: createArrayButtons(totalPages, 1)
	
	return (
		<div className={classes.Wrapper}>
			<div className={classes.NumbersPage}>
				{buttonsToRender.map((number, index) =>
					number === separator ? (
						<div className={classes.Separator} key={index}>
							{separator}
						</div>
					) : (
						<button
							onClick={(e) => onClick(e, +number - 1)}
							key={index}
							className={cn({ [classes.Active]: number === currentPage + 1 })}
							data-page={number}
						>
							{number}
						</button>
					)
				)}
			</div>
		</div>
	)
}