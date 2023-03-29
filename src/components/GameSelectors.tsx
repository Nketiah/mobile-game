import useRowsData from '../hooks/useRowsData'
import RenderButtons from './RenderButtons'
import RenderNumbers from './RenderNumbers'
import RenderVertical from './RenderVertical'


type PropTypes = {
    totalRows: 1 | 2 | 3 | 4 | 5,
    vs?: boolean
}

const GameSelectors = ({ totalRows, vs }: PropTypes) => {

    const { rows, stateFuncs, nums } = useRowsData(totalRows)


    return (
        <>
            {
                nums.map((num, index) =>
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <RenderNumbers
                            row={index + 1}
                            rows={rows}
                            stateFuncs={stateFuncs}
                        />
                        <RenderButtons
                            row={index + 1}
                            stateFuncs={stateFuncs}
                        />
                    </div>
                )
            }

            {vs && <RenderVertical
                column
                rows={rows}
                stateFuncs={stateFuncs}
            />}
        </>
    )
}

GameSelectors.defaultProps = {
    totalRows: 1
}

export default GameSelectors