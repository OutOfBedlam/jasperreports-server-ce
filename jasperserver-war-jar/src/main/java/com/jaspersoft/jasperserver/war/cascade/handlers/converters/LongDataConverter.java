/*
 * Copyright © 2005 - 2018 TIBCO Software Inc.
 * http://www.jaspersoft.com.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
package com.jaspersoft.jasperserver.war.cascade.handlers.converters;

import com.jaspersoft.jasperserver.api.JSValidationException;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

/**
 * @author Yaroslav.Kovalchyk
 * @version $Id$
 */
@Service
public class LongDataConverter implements DataConverter<Long> {
    @Override
    public Long stringToValue(String rawData) throws JSValidationException {
        return StringUtils.isNotEmpty(rawData) ? Long.valueOf(rawData) : null;
    }

    @Override
    public String valueToString(Long value) {
        return value != null ? value.toString() : "";
    }
}
