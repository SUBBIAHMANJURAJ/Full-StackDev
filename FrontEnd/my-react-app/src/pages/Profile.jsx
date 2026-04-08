import profileImage from '../assets/IMG_20250919_113415.jpg';

function Profile(){
  return (
    <div className="container py-4">
      <div className="card shadow-sm overflow-hidden border-0">
        <div className="bg-primary" style={{height: '220px'}}></div>
        <div className="card-body position-relative pt-0">
          <div className="d-flex align-items-end">
            <div className="rounded-circle border border-white" style={{width: '130px', height: '130px', marginTop: '-65px', overflow: 'hidden', backgroundColor: '#fff'}}>
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="ms-4">
              <h3 className="mb-1">Manju Raj</h3>
              <p className="text-muted mb-2">Software Developer · Chennai India</p>
              <div>
                <button className="btn btn-sm btn-primary me-2">Add Friend</button>
                <button className="btn btn-sm btn-outline-secondary">Message</button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body">
                  <h6 className="text-uppercase text-muted small">About</h6>
                  <p className="mb-1">Passionate full stack developer who loves building responsive web apps with React.</p>
                  <p className="text-muted small mb-0">Loves UI design, clean code and fast performance.</p>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body">
                  <h6 className="text-uppercase text-muted small">Details</h6>
                  <p className="mb-1"><strong>Work:</strong> Frontend Engineer Fresher</p>
                  <p className="mb-1"><strong>Education:</strong> B.E Electronics and Communication Engineering</p>
                  <p className="mb-0"><strong>Joined:</strong> April 2026</p>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Profile Activity</h5>
                    <span className="text-muted">5 min ago</span>
                  </div>
                  <div className="row text-center">
                    <div className="col-4">
                      <h6 className="mb-0">420</h6>
                      <small className="text-muted">Friends</small>
                    </div>
                    <div className="col-4">
                      <h6 className="mb-0">18</h6>
                      <small className="text-muted">Posts</small>
                    </div>
                    <div className="col-4">
                      <h6 className="mb-0">1.2k</h6>
                      <small className="text-muted">Followers</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="mb-3">Recent posts</h5>

                  <div className="mb-4">
                    <h6 className="mb-1">My latest design update</h6>
                    <p className="text-muted small mb-1">Shared a new project layout with the team and got great feedback.</p>
                    <span className="badge bg-secondary">Design</span>
                  </div>

                  <div className="mb-4">
                    <h6 className="mb-1">React Router setup</h6>
                    <p className="text-muted small mb-1">Built login navigation that moves to a profile page after submit.</p>
                    <span className="badge bg-secondary">React</span>
                  </div>

                  <div>
                    <h6 className="mb-1">Planning a UI refresh</h6>
                    <p className="text-muted small mb-1">Starting a new clean profile page with cards and user stats.</p>
                    <span className="badge bg-secondary">UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
