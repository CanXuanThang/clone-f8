import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    tableBox: {
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
    },
    tableContainer: {
        borderRadius: '8px',
        border: `2px solid rgba(249, 248, 249, 0.5)`,
        maxWidth: '100%',
        maxHeight: '100%',
        '&::-webkit-scrollbar, ::-webkit-scrollbar': {
            width: '7px',
            height: '7px',
        },
        '&::-webkit-scrollbar-track, ::-webkit-scrollbar-track': {
            borderRadius: '10px',
            backgroundColor: 'white',
        },
        '&::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'white',
        },
        '&::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
        },
        '&::-webkit-scrollbar-thumb:active, ::-webkit-scrollbar-thumb:active': {
            backgroundColor: 'white',
        },
    },
    table: { minHeight: 200, height: '100%' },
    tableLoading: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(249, 248, 249, 0.5)',
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        paddingTop: 80,
    },
    tableHead: {
        height: 60,
        '& th': 'rgba(249, 248, 249, 0.5)',
    },
    tableRow: {
        '& td': {
            fontSize: '1rem',
        },
    },
    tableRowHover: {
        cursor: 'pointer',
    },
}));

export default useStyles;
