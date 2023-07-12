import {Modal, useMantineTheme} from '@mantine/core'
import './ProfileModal.css'

const ProfileModal = ({modalOpened, setModalOpened}) => {
    const theme = useMantineTheme()

    return(
        <Modal  
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            onClose={()=>{setModalOpened(false)}}
        >
            <form className='infoForm'>
                <h3>Your Info</h3>

                <div className='textfields'>
                    <input type="text" className='infoInput' name='FirstName' placeholder='First Name' autoComplete='off'/>
                    <input type="text" className='infoInput' name='LastName' placeholder='Last Name' autoComplete='off'/>
                    <input type="text" className='infoInput' name='livesIN' placeholder='Lives In' autoComplete='off'/>
                    <input type="text" className='infoInput' placeholder='RelationShip Status' autoComplete='off'/>
                    <input type="text" className='infoInput' name='Country' placeholder='Country' autoComplete='off'/>
                </div>

                <div className='imageUploadSection'>
                    <p>Profile Image</p>
                    <input type="file" name="profileImg"/>
                    <p>Cover Image</p>
                    <input type="file" name='coverImg' />
                </div>

                <button className='button infoButton'>Update</button>
            </form>
        </Modal>
    )
}

export default ProfileModal