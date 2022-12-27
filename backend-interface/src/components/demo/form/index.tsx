import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Statu from './statuDto'
import customerInformation from '../../../server/customerInformation'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
interface Iprop {
    data: any
    reget: Function
}

interface sort {
    backgroundInformation: {
        negotiateYear: string
    }
}
interface data {
    backgroundInformation: {
        id: number,
        country: string,
        city: string,
        negotiateYear: string,
        fax: string,
        areaAddress?: string,
        companyName: string,
        employeeName: string,
        position: string,
        cellPhone: string,
        area: string,
        email: string,
        companyUrl: string,
        industryType: string,
        remark: string,
        compantPhone: string
    }
}
const Form: React.FC<Iprop> = ({ data, reget }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [show, setShow] = useState<boolean>(false);
    const [object, setObject] = useState({});
    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const itemsPerPage = 5;
    useEffect(() => {
        if (data) {
            const newData = data.sort((a: sort, b: sort) => {
                return Number(a.backgroundInformation.negotiateYear) - Number(b.backgroundInformation.negotiateYear)
            })
            const endOffset = itemOffset + itemsPerPage
            setCurrentItems(newData.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(newData.length / itemsPerPage))
        }
    }, [itemOffset, itemsPerPage, data])

    const statu = (todo: object) => {
        setShow(true)
        setObject(todo)
    }

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    }

    const delet = ( ) => {
        customerInformation.deleteCompanyData(id).then(
            () => {
                reget()
                setOpen(false)
            }
        )
    }

    const handleClick = (id: any) => {
        setId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <React.Fragment >
            <Button color="inherit" size="small" onClick={delet}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <table>
                <thead>
                    <tr >
                        <th>No.</th>
                        <th>Year</th>
                        <th>Area</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Industry</th>
                        <th>Company Name</th>
                        <th>Telephone</th>
                        <th>Cell Phone</th>
                        <th>Email</th>
                        <th>Fax</th>
                        <th>Name</th>
                        <th><i className="fa-solid fa-chevron-down me-2"></i>Job Title</th>
                        <th>Remark</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((todo: data, i: number) => {
                            return <tr key={i}>
                                <td onClick={() => statu(todo)} className='No'>{i + 1 + itemOffset}.</td>
                                <td onClick={() => statu(todo)} className='Year'>{todo.backgroundInformation.negotiateYear}</td>
                                <td onClick={() => statu(todo)} className='Area'>{todo.backgroundInformation.area}</td>
                                <td onClick={() => statu(todo)} className='Country'>{todo.backgroundInformation.country}</td>
                                <td onClick={() => statu(todo)} className='City' style={
                                    todo.backgroundInformation.city === 'No' && 'no' ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(61, 61, 61)' }
                                }>{todo.backgroundInformation.city}</td>
                                <td onClick={() => statu(todo)} className='Industry'><i className="fa-solid fa-o"></i>{todo.backgroundInformation.industryType}</td>
                                <td onClick={() => statu(todo)} className='CompanyName'>{todo.backgroundInformation.companyName.charAt(0).toUpperCase() + todo.backgroundInformation.companyName.slice(1)}</td>
                                <td onClick={() => statu(todo)} className='Telephone'>{todo.backgroundInformation.compantPhone}</td>
                                <td onClick={() => statu(todo)} className='CellPhone' style={todo.backgroundInformation.cellPhone === 'No' && 'no' ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(0, 71, 163)' }
                                }>{todo.backgroundInformation.cellPhone}</td>
                                <td onClick={() => statu(todo)} className='Email'>{todo.backgroundInformation.email}</td>
                                <td onClick={() => statu(todo)} style={
                                    (todo.backgroundInformation.fax === 'no' || todo.backgroundInformation.fax === 'No') ? { color: 'rgb(170, 170, 170)' } : { color: 'rgb(0, 71, 163)' }
                                } className='Fax'>{todo.backgroundInformation.fax}</td>
                                <td onClick={() => statu(todo)} className='Name'>{todo.backgroundInformation.employeeName}</td>
                                <td onClick={() => statu(todo)} className='JobTitle'>{todo.backgroundInformation.position}</td>
                                <td className='Remark'>{todo.backgroundInformation.remark}</td>
                                <td><button onClick={() => handleClick(todo.backgroundInformation.id)}><i className="fa-sharp fa-solid fa-trash-can"></i></button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='pag'>
                <span className='remark'>showing {itemOffset + 1} - {currentItems.length + itemOffset} of {data && data.length} results</span>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={undefined}
                    containerClassName='pagination'
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-nums'
                    nextLinkClassName='page-nums'
                    activeLinkClassName='active'
                />
                <span className='remark'>items per page {pageCount}</span>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Confirm Deletion"
                action={action}
            />
            <Statu show={show} setShow={setShow} object={object} reget={reget} />
        </>

    )
}
export default Form;