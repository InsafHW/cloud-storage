import classes from './FileList.module.css'
import {Button_Ghost} from '../../ui/button/ghost/Button_Ghost'
import {IoReturnUpBackOutline, IoArrowDownSharp} from 'react-icons/io5'
import {BsFilterLeft} from 'react-icons/bs'
import {useSelector} from 'react-redux'
import {File} from './file/File'

const FileList = () => {
    // const {files} = useSelector(state => state.files)

    const files = [
        {
            _id: '1',
            type: 'Dir',
            name: 'Test1'
        },
        {
            _id: '2',
            type: 'Dir',
            name: 'Test2'
        },
        {
            _id: '3',
            type: 'Dir',
            name: 'Test3'
        },
        {
            _id: '4',
            type: 'File',
            name: 'TestFile'
        },
        {
            _id: '5',
            type: 'Dir',
            name: 'Test6'
        }
    ]

    console.log(files)

    return (
        <div className={classes.fileList}>
            <div className={classes.title}>Folder Name</div>
            <div>
                <div className={classes.actionBar}>
                    <Button_Ghost Binding={() => <IoReturnUpBackOutline size={'1.5em'} />} />
                    <div className={classes.filterBtns}>
                        <IoArrowDownSharp className={classes.filterBtn} size={'1.5em'} />
                        <BsFilterLeft className={classes.filterBtn} size={'1.5em'} />
                    </div>
                </div>
                <Button_Ghost text={'Новая папка'} />
            </div>
            <div className={classes.table}>
                <div className={classes.tableHeader}>
                    <div className={classes.name}>Название</div>
                    <div className={classes.date}>Дата</div>
                    <div className={classes.size}>Размер</div>
                </div>
                <div className={classes.tableContent}>
                    {files.map(f => (
                        <File
                            key={f._id}
                            name={f.name}
                            type={f.type}
                            date={'28.12.2021'}
                            size={f.size}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export {
    FileList
}
