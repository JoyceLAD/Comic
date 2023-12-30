import React, { useState } from 'react';

const FollowComic = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    // Toggle trạng thái theo dõi
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);

    // Gửi yêu cầu đến máy chủ để cập nhật trạng thái theo dõi (nếu cần)
    // Ví dụ: callAPIUpdateFollowStatus(isFollowing);
  };

  return (
    <div>
      <button
        onClick={handleFollowToggle}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          isFollowing ? 'bg-red-500' : ''
        }`}
      >
        {isFollowing ? 'Đã theo dõi' : 'Theo dõi'}
      </button>
    </div>
  );
};

export default FollowComic;
