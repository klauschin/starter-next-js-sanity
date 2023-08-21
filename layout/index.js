import HeadMetaAndPreload from '@/components/HeadMetaAndPreload';
import HeadSharing from '@/components/HeadSharing';
import HeadTrackingCode from '@/components/HeadTrackingCode';

import AdaSkip from './AdaSkip';
import Announcement from './Announcement';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Layout = ({ siteData = {}, pageData = {}, schema, children }) => {
	return (
		<>
			<HeadMetaAndPreload />
			<HeadSharing site={siteData} page={pageData} schema={schema} />
			<HeadTrackingCode siteData={siteData} />

			<AdaSkip />
			<Announcement data={siteData?.announcement} />
			<Header data={siteData?.header} />
			<Main siteData={siteData}>{children}</Main>
			<Footer siteData={siteData} data={siteData.footer} />
		</>
	);
};

export default Layout;
