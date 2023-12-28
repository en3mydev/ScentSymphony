function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profile-section">
      <h1>
        Welcome to your profile,{" "}
        <span className="profile-email">{user.email}</span>!
      </h1>
      <div className="profile-section-buttons">
        <button>Order History</button>
        <button>Change Password</button>
        <button>Delivery Address</button>
      </div>
    </div>
  );
}

export default Profile;
