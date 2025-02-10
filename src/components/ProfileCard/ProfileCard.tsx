import { UserProfile } from '@/interfaces/response/user-profile.response.interface'
import { stringAvatar } from '@/lib/utils'
import { Chip } from '@mui/material'
import React from 'react'

interface IProfileCardProps {
    userProfile : UserProfile
}

export const ProfileCard = (props : IProfileCardProps) => {
    const { userProfile } = props
  return (
    <div className="flex flex-col shadow-2xl rounded-2xl  w-full md:w-[40%] h-auto">
    <div
      className="h-[20vh] relative inset-0 bg-black p-4 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:24px_24px]
    [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 0% 100%)",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <div
        className="bg-white h-[8vh] w-[8vh] rounded-full flex 
      justify-center items-center text-center text-xl"
        {...stringAvatar(userProfile.name)}
      />
    </div>
    <div className="flex flex-col p-4 gap-2">
      <h1 className="text-2xl font-semibold">{userProfile.name}</h1>
      <div className="flex flex-row gap-4">
        <Chip label="Email" />
        <Chip
          variant="outlined"
          color="primary"
          label={userProfile?.email}
        />
      </div>
      {userProfile?.role && (
        <div className="flex gap-4">
          <Chip label="Role" />
          <Chip
            variant="outlined"
            color="success"
            label={userProfile?.role}
          />
        </div>
      )}

      {userProfile.country && (
        <div className="flex flex-row gap-2">
          <Chip label="Location" />
          <div className="flex flex-row gap-2">
            <Chip
              variant="outlined"
              color="success"
              label={userProfile?.city}
            />
            <Chip
              variant="outlined"
              color="success"
              label={userProfile.state}
            />
            <Chip
              variant="outlined"
              color="success"
              label={userProfile.country}
            />
          </div>
        </div>
      )}
    </div>
  </div>
  )
}
