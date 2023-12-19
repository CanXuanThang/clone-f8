import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type TLINK = {
    title: string;
    link: string;
};

interface Props {
    arrPath: TLINK[];
}

function BreakCrumbBase({ arrPath }: Props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {arrPath.map((item: TLINK, index) =>
                arrPath.length === index + 1 ? (
                    <Typography color="text.primary" key={index}>
                        {item.title}
                    </Typography>
                ) : (
                    <Link to={item.link} style={{ textDecoration: 'none' }} key={index}>
                        <Typography color="black" variant="caption">
                            {item.title}
                        </Typography>
                    </Link>
                )
            )}
        </Breadcrumbs>
    );
}

export default BreakCrumbBase;
