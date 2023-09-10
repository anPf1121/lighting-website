import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

export default function GlobalFooter() {
    return (
        <>
            <Footer
                maxColumnsPerRow={3}
                columns={
                    [
                        {
                            title: 'Address',
                            items: [
                                {
                                    title: '20 Lieu Giai, Ba Dinh District,'
                                },
                                {
                                    title: 'Hanoi, Vietnam, 100000',
                                }
                            ]
                        },
                        {
                            title: 'Contact',
                            items: [
                                {
                                    title: '0983889888'
                                }
                            ]
                        },
                        {
                            title: 'Opening Hours',
                            items: [
                                {
                                    title: 'Mon - Fri 8:00 am – 5:00 pm'
                                },
                                {
                                    title: 'Saturday - Fri 9:00 am – 5:00 pm'
                                },
                                {
                                    title: 'Sunday - Fri 10:00 am – 4:00 pm'
                                },
                            ]
                        }
                    ]
                }
                bottom="Copyright 2023 © Công ty trách nhiệm hữu hạn điện chiếu sáng Tam Anh, thành lập ngày 6/5/2003"
            />
        </>
    )
}