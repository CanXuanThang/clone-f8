import Infomation from './Infomation';
import ContactUs from './ContactUs';
import Term from './Term';
import DialogBase from '@module-base/components/DialogBase';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    title: string;
}

function AboutUs({ open, setOpen, title }: Props) {
    return (
        <DialogBase
            open={open}
            setOpen={setOpen}
            textTitle={
                title === 'info'
                    ? 'Giới thiệu về chúng tôi'
                    : title === 'contact'
                    ? 'Liên hệ với chúng tôi'
                    : 'Điều khoản sử dụng'
            }
            contentText={title === 'info' ? <Infomation /> : title === 'contact' ? <ContactUs /> : <Term />}
        />
    );
}

export default AboutUs;
