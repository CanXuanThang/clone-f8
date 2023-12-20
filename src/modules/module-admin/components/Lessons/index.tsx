import { Box, Button, Link } from '@mui/material';
import { IconButton, Typography } from '@mui/material';
import TableBase from '@src/modules/module-base/components/TableBase';
import { TableBaseProps } from '@src/modules/module-base/constants';
import { getCourseById } from '@src/modules/module-global/api/Course';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCourseApi, deleteLessonApi } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BreakCrumbBase from '@src/modules/module-base/components/BreakCrumbBase';
import { SCREEN_ADMIN } from '../../constants';
import EditIcon from '@mui/icons-material/Edit';
import DialogAddLesson from './DialogAddLesson';

interface Data {
    id: number;
    code: string;
    course: string | null;
    description: string;
    embeddedLink: string;
    image: string | null;
    indexOrder: number;
    name: string;
}

function Lessons() {
    const dispatch = useDispatch();
    const param = useParams();
    const [open, setOpen] = useState<boolean>(false);

    const column: TableBaseProps<Data>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => <Typography variant="caption">{item.id}</Typography>,
        },
        {
            id: 'code',
            label: 'Code',
            render: (item) => item.code,
        },
        {
            id: 'name',
            label: 'Tên khóa học',
            render: (item) => <Typography variant="caption">{item.name}</Typography>,
        },
        {
            id: 'description',
            label: 'Mô tả',
            render: (item) => <Typography variant="caption">{item.description}</Typography>,
        },
        {
            id: 'embeddedLink',
            label: 'Link',
            render: (item) => (
                <Link href={item.embeddedLink} target="_blank" sx={{ textDecoration: 'none', color: '#56C1FF' }}>
                    LINK
                </Link>
            ),
        },
        {
            id: 'action',
            label: '',
            render: (item) => (
                <Box display="flex" flexDirection="row">
                    <IconButton color="error" onClick={() => deleteLesson.mutate({ data: { id: item.id } })} title="Xóa">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    const getCourse = useMutation({
        mutationFn: getCourseById,
    });

    const deleteLesson = useMutation({
        mutationFn: deleteLessonApi,
        onSuccess: (response) => {
            let mode;
            let message;

            if (response?.code === '200') {
                getCourse.mutate({ data: { id: Number(param.courseId) } });
                mode = 'success';
                message = 'Xóa thành công';
            } else {
                mode = 'error';
                message = 'Xóa thất bại';
            }
            return dispatch({
                type: 'notify',
                payload: {
                    mode: mode,
                    message: message,
                },
            });
        },
    });

    useEffect(() => {
        getCourse.mutate({ data: { id: Number(param.courseId) } });
    }, [param]);

    return (
        <Box>
            <BreakCrumbBase
                arrPath={[
                    { title: 'Danh sách khóa học', link: SCREEN_ADMIN.COURSES },
                    { title: 'Danh sách bài học', link: SCREEN_ADMIN.LESSONS },
                ]}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4} mt={2}>
                    Danh sách bài học
                </Typography>
                <Button color="info" variant="contained" onClick={() => setOpen(true)}>
                    Thêm bài học
                </Button>
            </Box>
            <TableBase
                rows={column}
                data={getCourse.data?.data.lessons}
                loading={getCourse.isLoading || deleteLesson.isLoading}
            />
            <DialogAddLesson
                open={open}
                setOpen={setOpen}
                onRefesh={() => getCourse.mutate({ data: { id: Number(param.courseId) } })}
            />
        </Box>
    );
}

export default Lessons;
