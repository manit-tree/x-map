document.addEventListener('DOMContentLoaded', () => {
    map.addEventListener('ready', () => {
        map.setPopup({
            title: 'บ้านนิรมิตร',
            address: '27/18 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี  11120',
            tel: '080-597-9990',
            email: '8columns@gmail.com'
        })
    })

    test.addEventListener('click', () => {
        map.setLocation('13.854442619326525', '100.58495218973192').then(() => {
            map.setPopup({
                title: 'บ้านนิรมิตร xx',
                address: '27/18 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี  11120',
                tel: '080-597-9990',
                email: '8columns@gmail.com'
            })

        })
    })
})
