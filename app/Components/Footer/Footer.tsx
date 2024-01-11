import Link from "next/link";
import VipList from "./VipList";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <>
      <div className="mt-5 bg-dark_dark_blue text-white px-4">
        {/** VIP List Section */}
        <VipList />
        {/** Copyright Section */}

        {/** Logo Section */}
        <SocialMedia />
        {/** End Logo Section */}
      </div>

      {/** Copyright Section */}
      <div className="bg-light_blue px-4 md:px-6 lg:px-6 xl:px-12 py-6 w-full flex flex-col items-center justify-center space-y-4 lg:flex-row lg:justify-between lg:items-center lg:py-1 coyright">
        <div className="text-center items-center space-y-1 lg:flex lg:flex-row lg:items-center lg:space-x-2">
          <div className="xl:border-r-2 xl:border-dark_blue xl:pr-2">
            ©2023 Novel Homes. All Rights Reserved
          </div>
          <div className="xl:border-r-2 xl:border-dark_blue xl:pr-2">
            Privacy Policy
          </div>
          <div className="xl:border-r-2 xl:border-dark_blue xl:pr-2">
            Accessibility
          </div>
          <div className="m-0">
            <Link href="/grouptwo.com" target="_blank">
              Site By GroupTwo
            </Link>
          </div>
        </div>
        <div className="-mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.075"
            height="30"
            viewBox="0 0 29.075 30"
          >
            <g
              id="EHO_logo_White"
              data-name="EHO logo White"
              transform="translate(-1.011 -0.323)"
            >
              <path
                id="Path_7343"
                data-name="Path 7343"
                d="M4.022,10.6H2V7.871L14.516.323,27.441,7.978,27.4,10.667H25.462V20H4.086ZM6.6,17.613,22.8,17.57V8.28L14.452,3.312,6.6,8.172Z"
                fill="#00072d"
              />
              <g id="Group_325" data-name="Group 325">
                <g id="Group_324" data-name="Group 324">
                  <path
                    id="Path_7344"
                    data-name="Path 7344"
                    d="M1.011,24.817v-3.29H2.624v.516H1.634v.817h.925v.516H1.634v.968H2.667v.516H1.011Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7345"
                    data-name="Path 7345"
                    d="M4.065,24.366c-.344,0-.387-.366-.387-1.183,0-.839.043-1.2.387-1.2s.387.366.387,1.2C4.452,24,4.409,24.366,4.065,24.366Zm1.247-.043H5.054a2.608,2.608,0,0,0-.3.108h0a1.56,1.56,0,0,0,.366-1.247c0-.86,0-1.7-1.011-1.7s-1.011.839-1.011,1.7c0,1.14.108,1.677,1.032,1.677.108,0,.258-.022.366-.022h.882v-.516Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7346"
                    data-name="Path 7346"
                    d="M7.57,21.527v2.344a.933.933,0,0,1-1.011,1.011.908.908,0,0,1-1.011-1.011V21.548h.624v2.28c0,.409.151.559.387.559.28,0,.387-.194.387-.559v-2.28H7.57Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7347"
                    data-name="Path 7347"
                    d="M9.355,23.591H8.774l.28-1.419h0Zm-.882,1.226.172-.731h.839l.172.731H10.3l-.8-3.29H8.688l-.817,3.29Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7348"
                    data-name="Path 7348"
                    d="M10.6,24.817v-3.29h.624V24.28h.925v.538Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7349"
                    data-name="Path 7349"
                    d="M15.57,22.86V21.548h.624v3.29H15.57V23.376h-.71v1.462h-.624v-3.29h.624V22.86Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7350"
                    data-name="Path 7350"
                    d="M17.72,24.387c-.344,0-.387-.366-.387-1.2s.043-1.2.387-1.2.387.366.387,1.2C18.129,24.022,18.086,24.387,17.72,24.387Zm0,.495c1.011,0,1.011-.839,1.011-1.7s0-1.7-1.011-1.7-1.011.839-1.011,1.7S16.71,24.882,17.72,24.882Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7351"
                    data-name="Path 7351"
                    d="M21.247,21.527v2.344a.933.933,0,0,1-1.011,1.011.908.908,0,0,1-1.011-1.011V21.548h.624v2.28c0,.409.151.559.387.559.28,0,.387-.194.387-.559v-2.28h.624Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7352"
                    data-name="Path 7352"
                    d="M22.559,24.882c-.774,0-.9-.495-.882-1.075H22.3c0,.323.022.581.344.581.215,0,.3-.151.3-.366,0-.6-1.247-.624-1.247-1.613,0-.516.215-.925.968-.925.6,0,.9.3.86.989h-.6c0-.237-.043-.495-.28-.495a.311.311,0,0,0-.323.344c0,.624,1.247.559,1.247,1.613C23.591,24.774,23.032,24.882,22.559,24.882Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7353"
                    data-name="Path 7353"
                    d="M24.022,24.817v-3.29h.624v3.29Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7354"
                    data-name="Path 7354"
                    d="M25.183,24.817v-3.29h.839l.8,2.28h0v-2.28H27.4v3.29h-.817l-.817-2.409h0v2.409Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7355"
                    data-name="Path 7355"
                    d="M29.247,22.538c0-.3-.043-.581-.366-.581-.387,0-.387.581-.387,1.226,0,1.032.086,1.2.452,1.2a.687.687,0,0,0,.3-.065v-.731H28.9v-.516h.946v1.677a4.434,4.434,0,0,1-.839.108c-1.032,0-1.161-.473-1.161-1.72,0-.839.043-1.677,1.054-1.677a.9.9,0,0,1,.946,1.075h-.6Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7356"
                    data-name="Path 7356"
                    d="M2.28,29.742c-.409,0-.473-.43-.473-1.441s.043-1.441.473-1.441c.409,0,.473.43.473,1.441C2.753,29.29,2.688,29.742,2.28,29.742Zm0,.581c1.226,0,1.226-.989,1.226-2.022s0-2.022-1.226-2.022-1.226.989-1.226,2.022C1.075,29.312,1.075,30.323,2.28,30.323Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7357"
                    data-name="Path 7357"
                    d="M4.839,26.925H5.2c.323,0,.409.28.409.6,0,.258-.151.516-.366.516H4.839Zm-.753,3.333h.731V28.667h.559c.86,0,.989-.71.989-1.161,0-.71-.258-1.183-.946-1.183H4.086Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7358"
                    data-name="Path 7358"
                    d="M7.548,26.925h.366c.323,0,.409.28.409.6,0,.258-.151.516-.366.516H7.548Zm-.731,3.333h.731V28.667h.538c.86,0,.989-.71.989-1.161,0-.71-.258-1.183-.946-1.183H6.8v3.935Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7359"
                    data-name="Path 7359"
                    d="M10.71,29.742c-.409,0-.473-.43-.473-1.441s.043-1.441.473-1.441c.409,0,.473.43.473,1.441C11.161,29.29,11.118,29.742,10.71,29.742Zm0,.581c1.226,0,1.226-.989,1.226-2.022s0-2.022-1.226-2.022-1.226.989-1.226,2.022C9.484,29.312,9.484,30.323,10.71,30.323Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7360"
                    data-name="Path 7360"
                    d="M13.226,26.925h.323c.237,0,.366.151.366.516,0,.258-.086.581-.366.581h-.323Zm0,1.7h.194c.559,0,.538.387.538.86a1.771,1.771,0,0,0,.086.753h.731a6.39,6.39,0,0,1-.086-1.161c0-.71-.473-.753-.645-.774V28.28c.473-.086.645-.452.645-.968,0-.667-.323-1.032-.817-1.032H12.516v3.914h.731v-1.57Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7361"
                    data-name="Path 7361"
                    d="M17.333,26.323v.645h-.817v3.269h-.731V26.968h-.817v-.645Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7362"
                    data-name="Path 7362"
                    d="M20.043,26.323V29.1a1.112,1.112,0,0,1-1.2,1.2,1.088,1.088,0,0,1-1.2-1.2V26.323h.731v2.731c0,.473.194.667.452.667.323,0,.473-.237.473-.667V26.323Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7363"
                    data-name="Path 7363"
                    d="M20.645,30.258V26.344h.989l.946,2.71h0v-2.71h.688v3.914H22.3l-.968-2.86h0v2.86h-.688Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7364"
                    data-name="Path 7364"
                    d="M23.914,30.258V26.344h.731v3.914Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7365"
                    data-name="Path 7365"
                    d="M27.376,26.323v.645h-.817v3.269h-.753V26.968h-.817v-.645Z"
                    fill="#00072d"
                  />
                  <path
                    id="Path_7366"
                    data-name="Path 7366"
                    d="M28.366,28.9l-.925-2.559h.8L28.774,28l.559-1.656h.753L29.1,28.9v1.355h-.731Z"
                    fill="#00072d"
                  />
                </g>
              </g>
              <g id="Group_326" data-name="Group 326">
                <path
                  id="Path_7367"
                  data-name="Path 7367"
                  d="M1.011,24.817v-3.29H2.624v.516H1.634v.817h.925v.516H1.634v.968H2.667v.516H1.011Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7368"
                  data-name="Path 7368"
                  d="M4.065,24.366c-.344,0-.387-.366-.387-1.183,0-.839.043-1.2.387-1.2s.387.366.387,1.2C4.452,24,4.409,24.366,4.065,24.366Zm1.247-.043H5.054a2.608,2.608,0,0,0-.3.108h0a1.56,1.56,0,0,0,.366-1.247c0-.86,0-1.7-1.011-1.7s-1.011.839-1.011,1.7c0,1.14.108,1.677,1.032,1.677.108,0,.258-.022.366-.022h.882v-.516Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7369"
                  data-name="Path 7369"
                  d="M7.57,21.527v2.344a.933.933,0,0,1-1.011,1.011.908.908,0,0,1-1.011-1.011V21.548h.624v2.28c0,.409.151.559.387.559.28,0,.387-.194.387-.559v-2.28H7.57Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7370"
                  data-name="Path 7370"
                  d="M9.355,23.591H8.774l.28-1.419h0Zm-.882,1.226.172-.731h.839l.172.731H10.3l-.8-3.29H8.688l-.817,3.29Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7371"
                  data-name="Path 7371"
                  d="M10.6,24.817v-3.29h.624V24.28h.925v.538Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7372"
                  data-name="Path 7372"
                  d="M15.57,22.86V21.548h.624v3.29H15.57V23.376h-.71v1.462h-.624v-3.29h.624V22.86Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7373"
                  data-name="Path 7373"
                  d="M17.72,24.387c-.344,0-.387-.366-.387-1.2s.043-1.2.387-1.2.387.366.387,1.2C18.129,24.022,18.086,24.387,17.72,24.387Zm0,.495c1.011,0,1.011-.839,1.011-1.7s0-1.7-1.011-1.7-1.011.839-1.011,1.7S16.71,24.882,17.72,24.882Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7374"
                  data-name="Path 7374"
                  d="M21.247,21.527v2.344a.933.933,0,0,1-1.011,1.011.908.908,0,0,1-1.011-1.011V21.548h.624v2.28c0,.409.151.559.387.559.28,0,.387-.194.387-.559v-2.28h.624Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7375"
                  data-name="Path 7375"
                  d="M22.559,24.882c-.774,0-.9-.495-.882-1.075H22.3c0,.323.022.581.344.581.215,0,.3-.151.3-.366,0-.6-1.247-.624-1.247-1.613,0-.516.215-.925.968-.925.6,0,.9.3.86.989h-.6c0-.237-.043-.495-.28-.495a.311.311,0,0,0-.323.344c0,.624,1.247.559,1.247,1.613C23.591,24.774,23.032,24.882,22.559,24.882Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7376"
                  data-name="Path 7376"
                  d="M24.022,24.817v-3.29h.624v3.29Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7377"
                  data-name="Path 7377"
                  d="M25.183,24.817v-3.29h.839l.8,2.28h0v-2.28H27.4v3.29h-.817l-.817-2.409h0v2.409Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7378"
                  data-name="Path 7378"
                  d="M29.247,22.538c0-.3-.043-.581-.366-.581-.387,0-.387.581-.387,1.226,0,1.032.086,1.2.452,1.2a.687.687,0,0,0,.3-.065v-.731H28.9v-.516h.946v1.677a4.434,4.434,0,0,1-.839.108c-1.032,0-1.161-.473-1.161-1.72,0-.839.043-1.677,1.054-1.677a.9.9,0,0,1,.946,1.075h-.6Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7379"
                  data-name="Path 7379"
                  d="M2.28,29.742c-.409,0-.473-.43-.473-1.441s.043-1.441.473-1.441c.409,0,.473.43.473,1.441C2.753,29.29,2.688,29.742,2.28,29.742Zm0,.581c1.226,0,1.226-.989,1.226-2.022s0-2.022-1.226-2.022-1.226.989-1.226,2.022C1.075,29.312,1.075,30.323,2.28,30.323Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7380"
                  data-name="Path 7380"
                  d="M4.839,26.925H5.2c.323,0,.409.28.409.6,0,.258-.151.516-.366.516H4.839Zm-.753,3.333h.731V28.667h.559c.86,0,.989-.71.989-1.161,0-.71-.258-1.183-.946-1.183H4.086Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7381"
                  data-name="Path 7381"
                  d="M7.548,26.925h.366c.323,0,.409.28.409.6,0,.258-.151.516-.366.516H7.548Zm-.731,3.333h.731V28.667h.538c.86,0,.989-.71.989-1.161,0-.71-.258-1.183-.946-1.183H6.8v3.935Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7382"
                  data-name="Path 7382"
                  d="M10.71,29.742c-.409,0-.473-.43-.473-1.441s.043-1.441.473-1.441c.409,0,.473.43.473,1.441C11.161,29.29,11.118,29.742,10.71,29.742Zm0,.581c1.226,0,1.226-.989,1.226-2.022s0-2.022-1.226-2.022-1.226.989-1.226,2.022C9.484,29.312,9.484,30.323,10.71,30.323Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7383"
                  data-name="Path 7383"
                  d="M13.226,26.925h.323c.237,0,.366.151.366.516,0,.258-.086.581-.366.581h-.323Zm0,1.7h.194c.559,0,.538.387.538.86a1.771,1.771,0,0,0,.086.753h.731a6.39,6.39,0,0,1-.086-1.161c0-.71-.473-.753-.645-.774V28.28c.473-.086.645-.452.645-.968,0-.667-.323-1.032-.817-1.032H12.516v3.914h.731v-1.57Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7384"
                  data-name="Path 7384"
                  d="M17.333,26.323v.645h-.817v3.269h-.731V26.968h-.817v-.645Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7385"
                  data-name="Path 7385"
                  d="M20.043,26.323V29.1a1.112,1.112,0,0,1-1.2,1.2,1.088,1.088,0,0,1-1.2-1.2V26.323h.731v2.731c0,.473.194.667.452.667.323,0,.473-.237.473-.667V26.323Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7386"
                  data-name="Path 7386"
                  d="M20.645,30.258V26.344h.989l.946,2.71h0v-2.71h.688v3.914H22.3l-.968-2.86h0v2.86h-.688Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7387"
                  data-name="Path 7387"
                  d="M23.914,30.258V26.344h.731v3.914Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7388"
                  data-name="Path 7388"
                  d="M27.376,26.323v.645h-.817v3.269h-.753V26.968h-.817v-.645Z"
                  fill="#00072d"
                />
                <path
                  id="Path_7389"
                  data-name="Path 7389"
                  d="M28.366,28.9l-.925-2.559h.8L28.774,28l.559-1.656h.753L29.1,28.9v1.355h-.731Z"
                  fill="#00072d"
                />
              </g>
              <rect
                id="Rectangle_2555"
                data-name="Rectangle 2555"
                width="8.71"
                height="2.581"
                transform="translate(10.344 8.796)"
                fill="#00072d"
              />
              <rect
                id="Rectangle_2556"
                data-name="Rectangle 2556"
                width="8.71"
                height="2.581"
                transform="translate(10.366 12.731)"
                fill="#00072d"
              />
            </g>
          </svg>
        </div>
      </div>
      {/** End Copyright Section */}
    </>
  );
}

export default Footer;