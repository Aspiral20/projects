import React from 'react'

const HeaderTop = () => {
  return (
    <div className="header-top">
        <div className="row justify-content-between">
            <div className="col-md-6">
                <span className="header-top-address">
                    <i className="fal fa-map-marker-alt"></i> 1901 Thornridge Cir. Shiloh, Hawaii 81063
                </span>
            </div>

            <div className="col-md-6">
                <div className="header-top-contact">
                    <span className="header-top-conatact__phone">
                        <a href="tel:98(000)-96302"><i className="fal fa-phone-alt"></i> +98(000)-96302</a>
                    </span>

                    <span className="header-top-conatact__email">
                        <a href="mailto:info125@gmail.com"><i className="fal fa-envelope"></i> info125@gmail.com</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop